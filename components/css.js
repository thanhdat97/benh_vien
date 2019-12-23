import { StyleSheet } from "react-native";
import { Dimensions, Platform } from 'react-native';
var { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container_header: {
        flexDirection: 'row',
        backgroundColor: "#3F51B5",
        justifyContent: 'center',
        alignItems: 'center',
        height: 40
    },
    row: {
        flexDirection: 'row',

    },
    view_image: {
        marginTop: 20,
        alignItems: "center",
    },
    header: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        fontWeight: "bold",
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height: height,
    },


    wrap_dangnhap: {
        height: "48%",
        backgroundColor: "#fff",
        marginLeft: "7%",
        marginRight: "7%",
        borderRadius: 5,
        zIndex: 0,
        paddingTop: 5
    },
    view_image_login_dangnhap: {
        marginBottom: 30,
        marginTop: "-40%",
    },
    container_dangnhap: {
        backgroundColor: "#dcdcdc",
        height: height,

    },
    view_image_login: {
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
        marginTop: 20,
    },
    container_table: {
        flex: 1,
        width: "98%",
        marginBottom: 20,
        backgroundColor: '#fff',
        paddingLeft: "2%",

    },
    container_table2: {
        flex: 1,
        width: width,
        backgroundColor: '#fff'
    },

    container2: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    column_875: {
        flexDirection: "column",
        width: "100%",
        paddingTop: 10,

    },
    row_hba1c: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    text_877: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        width: "95%",
        paddingBottom: 20,
        backgroundColor: "#dcdcdc",
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        paddingBottom: 8,
        paddingTop: 8,
        borderRadius: 5,
    },
    button_dangnhap: {
        textAlign: "center",
        width: "100%",
        alignItems: "center",
        paddingTop: 35,
    },
    text_button_dangnhap: {
        backgroundColor: "green",
        padding: 15,
        width: "80%",
        color: "#fff",
        textAlign: "center",
    },
    wrap_icon_and_textinput_login: {
        flexDirection: "row",
        marginLeft: 30,
        borderBottomColor: "#dcdcdc",
        borderBottomWidth: 1,
        marginRight: 30,
        paddingTop: 20,
    },
    input_name_login: {
        width: "100%",
        paddingLeft: 15,
        color: "#000",

    },
    input_matkhau_login: {
        width: "100%",
        paddingLeft: 15,
    },
    text_87712: {
        fontSize: 16,
        width: "100%",
        paddingLeft: 10,
        paddingBottom: 10,
        justifyContent: "flex-start",
    },
    text_875: {
        width: "100%",
        paddingBottom: 20,
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: "#dcdcdc",
        fontSize: 16,
        paddingLeft: 10,
        flexDirection: 'row',
    },
    text_8759: {

    },
    text_87: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "right",
        width: "100%",
    },
    text_8712: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        width: "60%",
    },
    text_871212: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        width: "80%",
    },
    text_87123: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        width: "30%",
    },
    text_87121: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        width: "50%",
    },
    container_about: {
        flexDirection: 'row',
        flex: 5,
    },
    text_help: {
        width: "100%",
        textAlign: "center",
        paddingBottom: 20,
        paddingTop: 20,
        color: "#ed1c24",
    },
    container_about12: {
        flexDirection: 'row',
        flex: 5,
    },
    head: {
        height: 30,
        width: width,
        backgroundColor: '#f1f8ff'
    },
    headact: {
        height: 30,
        width: "100%",
        backgroundColor: '#f1f8ff'
    },
    dataact: {
        height: 30,
        width: "100%",
        justifyContent: 'center'
    },
    data: {
        width: width,
        justifyContent: 'center'
    },

    inputContainer: {
        borderColor: 'red',
        backgroundColor: '#3F51B5',
        borderBottomWidth: 1,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',

    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width / 2
    },
    image_ql: {
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        width: width / 5
    },
    image_ql2: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: width / 4
    },
    container_about2: {
        flexDirection: 'row',
        flex: 1
    },
    text_user: {
        borderBottomColor: '#FFFFFF',
        flex: 1,
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center'
    },
    row_linear_act: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
    },
    wrap_linear_hs_act: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        height: 44,
        paddingHorizontal: 6,
        margin: 10,
        borderRadius: 5,
        borderColor: "#dcdcdc",
        borderWidth: 1,
    },
    wrap_button_dangkykhambenhtuxa: {
        width: "100%",
        textAlign: "center",
        alignItems: "center",
        paddingTop: 10,
    },
    button_dangkykhambenhtuxa: {
        width: "30%",
        backgroundColor: "#2093ED",
        borderRadius: 5,
        padding: 8,
        textAlign: "center",
        color: "#fff",
    },
    select2_chonbacsi1: {
        borderRadius: 5,
    },
    select2_chonbacsi: {
        width: "100%",
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    tieu_de_about: {
        fontSize: 20,
        textAlign: 'center',
        color: '#000',
        fontWeight: "bold",
    },
    image: {
        width: 140, height: 'auto',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        flex: 1,
    },

    column_information: {
        flex: 1,
        padding: 8
    },
    container5: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 15,
    },
    textinput_modal: {
        height: 'auto',
        borderColor: '#dcdcdc',
        fontSize: 16,
        borderWidth: 1,
        width: 'auto',
        flex: 1,
        borderRadius: 5,
        marginBottom: 10,
        marginTop: 10,
        color: "#000",
    },
    itemText_time_12: {
        color: "green",
    },
    wrap_icon_date_serach: {
        paddingTop: 3,
        paddingLeft: 10,
    },
    wrap_icon_date_serach_text: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonText: {
        textAlign: "center",
        color: "#fff",
    },
    wrap_thongtinkhamchuabenh: {
        flexDirection: "row",
        paddingBottom: 10,
        borderTopColor: "#dcdcdc",
        borderTopWidth: 1,
    },
    icon_thongtinkhamchuabenh: {
        paddingLeft: 10,
        width: "15%",
        textAlign: "center",
        alignItems: "center",
    },
    text_title_hososuckhoebandau: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
        paddingBottom: 10,
    },
    text_thongtinkhamchuabenh: {
        paddingTop: 15,
        paddingLeft: 10,
        width: "90%",
    },
    wrap_date_time_dangkykhambenhtuxa: {
        width: "100%",
        textAlign: "center",
        alignItems: "center",
    },
    wrap_date_time_dangkykhambenhtuxa1: {
        width: "50%",
    },
    linearGradient_32756: {
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        width: "100%",
        padding: 8,
        textAlign: "center",
    },
    linear2: {
        marginLeft: 5
    },
    linear3: {
        marginLeft: 5,
        marginRight: 10,
    },
    linearGradient_327567: {
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        width: width / 2,
        padding: 8,
        textAlign: "center",
    },
    linearGradient_327567act: {
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        width: "100%",
        padding: 8,
        textAlign: "center",
    },
    linearGradient_32756732: {
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        width: (width - 50) / 2,
        padding: 8,
        textAlign: "center",
    },
    column2: {
        flexDirection: 'column',
        flex: 1,
    },
    image2: {
        width: 200, height: 'auto',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        flex: 1,
    },
    flexstart: {
        justifyContent: "flex-start",
        flex: 2,
    },

    button: {
        height: 46,
        borderRadius: 5,
        backgroundColor: '#036fa9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text_button: {
        color: '#ffffff',
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text2: { textAlign: 'center', color: 'white' },
    text: { textAlign: 'center' },
    tieu_de_footer: {
        fontSize: 18,
        textAlign: 'center',
        margin: 2,
        color: 'white',
        fontWeight: "bold",
        flex: 1,
    },
    scroll_table: {


    },
    modal: {
        borderRadius: Platform.OS === 'ios' ? 20 : 6,
        shadowRadius: 10,
        width: "90%",
        height: 'auto',
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
    },
    go_back_home: {
        position: "absolute",
        zIndex: 1,
        bottom: 5,
        right: 10,
    },
































    //binhvietthem
    header_customize: {
        height: 130,
        backgroundColor: "#fff",
    },
    text_name_user_in_navi_customize: {
        fontSize: 18,
        fontWeight: "bold",
    },
    body_wrap_footer_customize: {
        textAlign: "center",
        justifyContent: "center",
    },
    wrap_footer_customize: {
        justifyContent: "center",
    },
    text_name_user_in_navi_customize: {
        textAlign: "center",

    },
    text_footer_customize_version: {
        textAlign: "center",
    },
    text_name_user_in_navi_customize_for_code: {
        textAlign: "center",
    },
    footer_customize: {
        backgroundColor: "#dcdcdc",

    },
    text_footer_customize: {
        textAlign: "center",
    },
    text_header_1: {
        color: "#fff",
        paddingTop: 12,
        fontSize: 16,
        textTransform: "uppercase",
    },
});
module.exports = styles;

