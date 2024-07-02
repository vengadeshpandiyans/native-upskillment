import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        justifyContent: 'space-between',
        paddingHorizontal: 16
    },
    welcomeText: {
        color: '#000000',
        fontSize: 32,
        fontWeight: '600',

    },
    textStyle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center'
    },
    ctaStyles: {
        borderWidth: 1,
        borderColor: '#feac00',
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#feac00',
        flex: 1,


    },
    welcomeImage: {
        width: '100%',
        // height: '100%',
        // flex: 1
    }


});