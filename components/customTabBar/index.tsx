import { Image, TouchableOpacity, View } from "react-native";
import { styles } from './styles'

const CustomTabBar = ({ state, descriptors, navigation }: any) => {

    return (
        <View style={{ flexDirection: 'row', height: 70, bottom: 10, backgroundColor: '#fff', marginHorizontal: 20, borderRadius: 50 }}>
            {state?.routes?.map((route: any, index: number) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                const renderIcon = (label: string) => {
                    switch (label) {
                        case 'OrderFood':
                            return isFocused ? require('../../assets/home.png') : require('../../assets/home_outline.png')
                        case 'AddToCart':
                            return isFocused ? require('../../assets/heart_filled.png') : require('../../assets/heart_unfilled.png')
                            case 'Notification':
                            return isFocused ? require('../../assets/notification.png') : require('../../assets/notification_unfilled.png')
                            case 'Announcement':
                            return isFocused ? require('../../assets/announcement.png') : require('../../assets/announcement_unfilled.png')
                        default:
                            return null;
                    }
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                        key={route.key}
                    >
                        {/* <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                {label}
              </Text> */}
                        <View style={isFocused ? styles.focused : styles.unfocused}>
                            <Image style={{ width: 20, height: 20 }} source={renderIcon(label)} />
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default CustomTabBar