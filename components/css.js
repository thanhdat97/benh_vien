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
        flex: 1,
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
        height: height
    },
    view_image_login: {
        alignItems: "center",
        justifyContent: "center",
        flex:1
    },
    container_table: { flex: 1,width:width,marginBottom:20, backgroundColor: '#fff' },

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
    text_877: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        width: "100%",
        paddingBottom: 20,
    },
    text_875: {
        width: "100%",
        paddingBottom: 20,
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: "#dcdcdc",
        fontSize: 16,
        paddingLeft: 10,
        flexDirection:'row'
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
    container_about12: {
        flexDirection: 'row',
        flex: 5,
    },
    head: {height: 50,width:width, backgroundColor: '#f1f8ff' },
    data: {width:width,justifyContent:'center'},

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
    input: {
        height: 44,
        paddingHorizontal: 6,
        margin: 5,
        borderRadius: 5,
        backgroundColor: 'rgba(0,0,0,0.1)',
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
        borderColor: '#000',
        borderWidth: 2,
        padding: 15,
    },
    textinput_modal: {
        height: 'auto',
        borderBottomColor: '#e6e5e5',
        fontSize: 16,
        borderBottomWidth: 1,
        width: 'auto',
        flex: 1
    },
    buttonText: {
        textAlign: "center",
        color: "#fff",
    },
    linearGradient_327567: {
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        width: "50%",
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
    text: {textAlign:'center'},
    tieu_de_footer: {
        fontSize: 18,
        textAlign: 'center',
        margin: 2,
        color: 'white',
        fontWeight: "bold",
        flex: 1,
    },
});
module.exports = styles;

