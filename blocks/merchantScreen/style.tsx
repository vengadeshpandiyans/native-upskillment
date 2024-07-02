import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    firstSectionBox: {
        gap: 12,
        padding: 12,
        backgroundColor: '#fff',
        borderRadius: 8
    },
    sectionSectionBox: {
        flex: 1,
        padding: 12,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginTop: 8,
        paddingBottom: 0
    },
    backgroundIcon: {
        width: 24,
        height: 24
    },
    title: {
        fontSize: 16
    },
    listContainer: {
        gap: 16,
    },
    itemContainer: {
        borderRightColor: '#D9DBDD',
        borderRightWidth: 0.8,
        paddingRight: 8,
    },
    lastItemContainer: {
        borderRightWidth: 0, // Remove the border for the last item
        paddingRight: 0, // Adjust padding if needed
    },
    ratingStyle: {
        borderTopWidth: 1,
        borderTopColor: '#e8e8e8',
        paddingTop: 20,
        marginTop: 4,
    },

    iconStyle: {
        width: 55,
        height: 55,
        borderRadius: 12,
        marginRight: 14,
    },
    ratingIcon: {
        width: 20,
        height: 20,
    },
    ratingIconSection: {
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center',
        marginBottom: 4,
    },
    chip: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 20,
        borderColor: 'lightgray',
    },

    tabText: {
        fontSize: 16,
        fontWeight: '600',
    },
    tabIcon: {
        width: 20,
        height: 20,
    },
    tabDetails: {
        borderTopWidth: 1,
        borderTopColor: '#e8e8e8',
        paddingTop: 20,
        marginTop: 4,
    },
    tabContainer: {
        gap: 10,
    },
    tabTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        marginBottom: 8
    },

    headerIcon: {
        width: 25,
        height: 25,
    },

    headerText: {
        fontSize: 20,
        color: '#02111A',
        fontWeight: '600',
    },
    comboImageStyle: {
        width: 75,
        height: 75,
        borderRadius: 12,
        marginRight: 14,
    },

    comboTextSx: {
        fontSize: 17,
        width: 180,
    },

    footerCTA: {
        // flex:0.2,
        backgroundColor: '#FFFF',
    },

    cartCta: {
        flexDirection: 'row',
        backgroundColor: '#c8361e',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    rightArrowStyle: {
        width: 20,
        height: 20,
    },

    amountTitle: {
        fontSize: 22,
        color: '#FFF',
        fontWeight: '600',
    },

    foodTitles: {
        backgroundColor: '#ecb2ac',
        paddingHorizontal: 14,
        paddingVertical: 4,
        borderRadius: 20,
    },
    selectedItemsText:{
        fontSize: 16,
        fontWeight: '600',
        color: '#c8361e',
    }


});