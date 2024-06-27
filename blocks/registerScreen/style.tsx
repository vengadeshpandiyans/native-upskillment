import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D6EFE7',
    },

    root: {
        flex: 1,
    },

    firstSection: {
        flex: 1.5,
        backgroundColor: '#D6EFE7',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        width: 180,
        textAlign: 'center',
        fontSize: 14,
        color: '#02111A',
        fontWeight: '600',
        marginTop: 12,
    },

    center: {
        flex: 2.6,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        // position: 'relative',
    },

    fieldsStyle: {
        flex: 6,
    },

    headerText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#02111A',
        fontWeight: '600',
        marginTop: 24,
    },

    subText: {
        textAlign: 'center',
        fontSize: 14,
        color: '#4E585E',
        fontWeight: '400',
        marginTop: 12,
        paddingLeft: 50,
        paddingRight: 50,
    },

    ctaStyle: {
        backgroundColor: '#30AF89',
        fontSize: 14,
        fontWeight: '600',
        color: '#FFF',
        borderRadius: 8,
        marginHorizontal: 16,
        textAlign: 'center',
        paddingVertical: 16,
        marginBottom: 20,
    },

    bottom: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#fff'
    },

    scrollView: {
        padding: 16,
        flexDirection: 'column',
    },

    scrollViewContainer: {
        paddingBottom: 90,
    },
});