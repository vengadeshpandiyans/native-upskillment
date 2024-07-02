import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        gap: 10,
        // alignItems:'center',
        // justifyContent:'space-between',
    },
    firstSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        flex: 1,
        // backgroundColor: 'red'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#02111A',

    },
    subTitle: {
        fontSize: 14,
        color: '#666',
        flex: 1
    },
    footText: {
        fontSize: 12,
        color: '#aaa',
    },
    counterSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    countText: {
        marginHorizontal: 10,
        fontSize: 18,
    },
    icon: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    subTitleIcon: {
        width: 16,
        height: 16,
    },
    subtitleBox: {
        flexDirection: 'row',
        gap: 4,
    },
    textSection: {
        flex: 1,
        gap: 8
    }

});