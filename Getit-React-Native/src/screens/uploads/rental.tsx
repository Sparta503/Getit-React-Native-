import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	TextInput,
	StyleSheet,
	ActivityIndicator,
	Alert,
	ScrollView,
	SafeAreaView,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';

import {
	Ionicons,
	MaterialCommunityIcons,
} from '@expo/vector-icons';

import saveRental from '../../services/uploads';

export default function RentalUploadScreen() {
	const [image, setImage] = useState<string | null>(null);
	const [uploading, setUploading] = useState(false);

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');

	const [location, setLocation] = useState<{
		latitude: number;
		longitude: number;
	} | null>(null);

	useEffect(() => {
		(async () => {
			const { status } =
				await ImagePicker.requestMediaLibraryPermissionsAsync();

			if (status !== 'granted') {
				Alert.alert(
					'Permission Required',
					'Gallery access is required.'
				);
			}
		})();
	}, []);

	const pickImage = async () => {
		try {
			const result =
				await ImagePicker.launchImageLibraryAsync({
					mediaTypes:
						ImagePicker.MediaTypeOptions.Images,
					quality: 0.7,
				});

			if (!result.canceled) {
				setImage(result.assets[0].uri);
			}
		} catch (e) {
			Alert.alert(
				'Error',
				'Could not open gallery.'
			);
		}
	};

	const takePhoto = async () => {
		try {
			const { status } =
				await ImagePicker.requestCameraPermissionsAsync();

			if (status !== 'granted') {
				Alert.alert(
					'Permission Required',
					'Camera permission is required.'
				);
				return;
			}

			const result =
				await ImagePicker.launchCameraAsync({
					quality: 0.7,
				});

			if (!result.canceled) {
				setImage(result.assets[0].uri);
			}
		} catch (e) {
			Alert.alert(
				'Error',
				'Could not open camera.'
			);
		}
	};

	const getLocation = async () => {
		try {
			const { status } =
				await Location.requestForegroundPermissionsAsync();

			if (status !== 'granted') {
				Alert.alert(
					'Permission Required',
					'Location access denied.'
				);
				return;
			}

			const loc =
				await Location.getCurrentPositionAsync({
					accuracy:
						Location.Accuracy.High,
				});

			setLocation({
				latitude: loc.coords.latitude,
				longitude: loc.coords.longitude,
			});

			Alert.alert(
				'Location Added',
				'Your current location was captured.'
			);
		} catch (e) {
			Alert.alert(
				'Error',
				'Could not get location.'
			);
		}
	};

	const onSave = async () => {
		if (!title || !description || !price) {
			Alert.alert(
				'Validation',
				'Please complete all fields.'
			);
			return;
		}

		setUploading(true);

		try {
			const payload = {
				title,
				description,
				price,
				image,
				location,
				createdAt: new Date().toISOString(),
			};

			await saveRental(payload);

			Alert.alert(
				'Success',
				'Rental uploaded successfully.'
			);

			setTitle('');
			setDescription('');
			setPrice('');
			setImage(null);
		} catch (e) {
			Alert.alert(
				'Error',
				'Could not upload rental.'
			);
		} finally {
			setUploading(false);
		}
	};

	return (
		<SafeAreaView style={styles.safeArea}>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={
					styles.scrollContainer
				}
			>
				{/* HEADER */}
				<View style={styles.header}>
					<Text style={styles.smallText}>
						Marketplace
					</Text>

					<Text style={styles.title}>
						Upload Rental
					</Text>
				</View>

				{/* IMAGE SECTION */}
				<TouchableOpacity
					style={styles.imageCard}
					activeOpacity={0.9}
					onPress={pickImage}
				>
					{image ? (
						<Image
							source={{ uri: image }}
							style={styles.image}
						/>
					) : (
						<View style={styles.placeholder}>
							<Ionicons
								name="image-outline"
								size={50}
								color="#4F6EF7"
							/>

							<Text style={styles.placeholderTitle}>
								Upload Rental Photo
							</Text>

							<Text style={styles.placeholderText}>
								Tap to select image
							</Text>
						</View>
					)}
				</TouchableOpacity>

				{/* ACTION BUTTONS */}
				<View style={styles.buttonRow}>
					<TouchableOpacity
						style={styles.secondaryButton}
						onPress={pickImage}
					>
						<Ionicons
							name="images-outline"
							size={20}
							color="#4F6EF7"
						/>

						<Text
							style={
								styles.secondaryButtonText
							}
						>
							Gallery
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.secondaryButton}
						onPress={takePhoto}
					>
						<Ionicons
							name="camera-outline"
							size={20}
							color="#4F6EF7"
						/>

						<Text
							style={
								styles.secondaryButtonText
							}
						>
							Camera
						</Text>
					</TouchableOpacity>
				</View>

				{/* FORM */}
				<View style={styles.form}>
					<Text style={styles.label}>
						Rental Title
					</Text>

					<TextInput
						placeholder="BMW M4 Competition"
						value={title}
						onChangeText={setTitle}
						style={styles.input}
					/>

					<Text style={styles.label}>
						Description
					</Text>

					<TextInput
						placeholder="Describe your rental..."
						value={description}
						onChangeText={setDescription}
						style={styles.textArea}
						multiline
					/>

					<Text style={styles.label}>
						Price Per Day
					</Text>

					<TextInput
						placeholder="$120/day"
						value={price}
						onChangeText={setPrice}
						style={styles.input}
					/>
				</View>

				{/* LOCATION CARD */}
				<TouchableOpacity
					style={styles.locationCard}
					onPress={getLocation}
					activeOpacity={0.9}
				>
					<View style={styles.locationLeft}>
						<View style={styles.locationIcon}>
							<Ionicons
								name="location"
								size={24}
								color="#fff"
							/>
						</View>

						<View>
							<Text
								style={
									styles.locationTitle
								}
							>
								Current Location
							</Text>

							<Text
								style={
									styles.locationSubtitle
								}
							>
								{location
									? 'Location captured successfully'
									: 'Tap to get your location'}
							</Text>
						</View>
					</View>

					<Ionicons
						name="chevron-forward"
						size={20}
						color="#999"
					/>
				</TouchableOpacity>

				{/* SAVE BUTTON */}
				<TouchableOpacity
					style={styles.uploadButton}
					onPress={onSave}
					activeOpacity={0.9}
				>
					{uploading ? (
						<ActivityIndicator color="#fff" />
					) : (
						<>
							<MaterialCommunityIcons
								name="cloud-upload-outline"
								size={22}
								color="#fff"
							/>

							<Text
								style={
									styles.uploadButtonText
								}
							>
								Upload Rental
							</Text>
						</>
					)}
				</TouchableOpacity>

				<View style={{ height: 40 }} />
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#F7F8FA',
	},

	scrollContainer: {
		padding: 20,
	},

	header: {
		marginBottom: 30,
	},

	smallText: {
		fontSize: 16,
		color: '#777',
		marginBottom: 6,
	},

	title: {
		fontSize: 34,
		fontWeight: '800',
		color: '#111',
	},

	imageCard: {
		backgroundColor: '#fff',
		borderRadius: 30,
		height: 260,
		marginBottom: 20,
		overflow: 'hidden',

		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 5,
		},

		shadowOpacity: 0.06,
		shadowRadius: 10,
		elevation: 4,
	},

	image: {
		width: '100%',
		height: '100%',
	},

	placeholder: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	placeholderTitle: {
		fontSize: 20,
		fontWeight: '700',
		color: '#111',
		marginTop: 14,
	},

	placeholderText: {
		color: '#777',
		marginTop: 5,
	},

	buttonRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 25,
	},

	secondaryButton: {
		flex: 1,
		backgroundColor: '#EEF3FF',
		paddingVertical: 16,
		borderRadius: 18,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
		marginHorizontal: 5,
	},

	secondaryButtonText: {
		color: '#4F6EF7',
		fontWeight: '700',
		marginLeft: 8,
		fontSize: 15,
	},

	form: {
		marginBottom: 25,
	},

	label: {
		fontSize: 16,
		fontWeight: '700',
		color: '#111',
		marginBottom: 10,
	},

	input: {
		backgroundColor: '#fff',
		padding: 18,
		borderRadius: 18,
		marginBottom: 18,
		fontSize: 16,

		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},

		shadowOpacity: 0.04,
		shadowRadius: 6,
		elevation: 2,
	},

	textArea: {
		backgroundColor: '#fff',
		padding: 18,
		borderRadius: 18,
		marginBottom: 18,
		fontSize: 16,
		height: 120,
		textAlignVertical: 'top',

		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},

		shadowOpacity: 0.04,
		shadowRadius: 6,
		elevation: 2,
	},

	locationCard: {
		backgroundColor: '#fff',
		borderRadius: 24,
		padding: 18,
		marginBottom: 30,

		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',

		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 5,
		},

		shadowOpacity: 0.05,
		shadowRadius: 8,
		elevation: 3,
	},

	locationLeft: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	locationIcon: {
		width: 55,
		height: 55,
		borderRadius: 18,
		backgroundColor: '#4F6EF7',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 14,
	},

	locationTitle: {
		fontSize: 17,
		fontWeight: '700',
		color: '#111',
	},

	locationSubtitle: {
		color: '#777',
		marginTop: 4,
	},

	uploadButton: {
		backgroundColor: '#4F6EF7',
		paddingVertical: 20,
		borderRadius: 22,

		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',

		shadowColor: '#4F6EF7',
		shadowOffset: {
			width: 0,
			height: 8,
		},

		shadowOpacity: 0.3,
		shadowRadius: 12,
		elevation: 5,
	},

	uploadButtonText: {
		color: '#fff',
		fontWeight: '800',
		fontSize: 17,
		marginLeft: 10,
	},
});