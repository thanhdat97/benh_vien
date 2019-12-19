import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from "./../css";
import AsyncStorage from '@react-native-community/async-storage'
import Heading from './../../Header'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { ScrollView } from 'react-native-gesture-handler';


var dateformat = require('dateformat')
export default class app extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        let DT = this.props.navigation.state.params.DT;

        this.state = {
            Ma_bn: '',
            Ho_ten: '',
            diaChi: '',
            ngaySinh: '',
            lansinh: DT.lanSinh,
            para: DT.para,
            ngaykinh: dateformat(DT.ngayKinh, "dd/mm/yyyy"),
            tableHead: ['Toàn thân', 'Sản khoa', 'Siêu âm', 'Xét nghiệm', 'Điện tim'],
            ngaykham: [],
            cannang: [],
            phu: [],
            mach:[],
            nhietdo:[],
            huyetap:[],
            duongKinhTs:[],
            vongBung:[],
            chieuCaoTc:[],
            timthai:[],
            conCoTc:[],
            coTuCung:[],
            ngoi:[],
            oi:[],
            amDao:[],
            ngoiThai:[],
            trongLuongThai:[],
            chiSoOi:[],
            dienRauBam:[],
            proteinNieu:[],
            hongCauNieu:[],
            bachCauNieu:[],
            ngaydukiensinh: dateformat(DT.ngaySinh, "dd/mm/yyyy"),
            hongCau:[],
            bachCau:[],
            tieuCau:[],
            huyetSacTo:[],
            xnKhac:[],
            dienTim:[]
        }
        fetch('http://27.72.76.115:8181/api/tuong-tac/get-all-kq-kham-thai/' + DT.id)
            .then((response) => response.json())
            .then((responseData) => {
                let ngaykham = []
                let chisophu
                let cannang = []
                let chisocannang
                let phu = []
                let chisomach
                let mach=[]
                let nhietdo=[]
                let chisonhietdo
                let huyetap=[]
                let chisoduongKinhTs
                let duongKinhTs=[]
                let chisoduongvongBung
                let vongBung=[]
                let chisoduongchieuCaoTc
                let chieuCaoTc=[]
                let timthai=[]
                let conCoTc=[]
                let chisoconCoTc
                let chisocoTuCung
                let coTuCung=[]
                let ngoi=[]
                let oi=[]
                let amDao=[]
                let chisoamDao
                let ngoiThai=[]
                let trongLuongThai=[]
                let chisochiSoOi
                let chiSoOi=[]
                let dienRauBam=[]
                let proteinNieu=[]
                let hongCauNieu=[]
                let bachCauNieu=[]
                let hongCau=[]
                let chisohongCau
                let bachCau=[]
                let chisobachCau
                let tieuCau=[]
                let chisotieuCau
                let huyetSacTo=[]
                let chisohuyetSacTo
                let xnKhac=[]
                let dienTim=[]
                responseData.forEach(element => {
                    if (element.phu == 2) {
                        chisophu = 'Không'
                    } else {
                        chisophu = 'Có'
                    }
                    if (element.conCoTc == 2) {
                        chisoconCoTc = 'Không'
                    } else {
                        chisoconCoTc = 'Có'
                    }
                    if (element.coTuCung == 2) {
                        chisocoTuCung = 'Đóng'
                    } else {
                        chisocoTuCung = 'Mở'
                    }
                    if (element.canNang != 0) {
                        chisocannang = element.canNang
                    } else {
                        chisocannang = ''
                    }
                    if (element.mach != 0) {
                        chisomach = element.mach
                    } else {
                        chisomach = ''
                    }
                    if (element.hongCau != 0) {
                        chisohongCau = element.hongCau
                    } else {
                        chisohongCau = ''
                    }
                    if (element.bachCau != 0) {
                        chisobachCau = element.bachCau
                    } else {
                        chisobachCau = ''
                    }
                    if (element.tieuCau != 0) {
                        chisotieuCau = element.tieuCau
                    } else {
                        chisotieuCau = ''
                    }
                    if (element.huyetSacTo != 0) {
                        chisohuyetSacTo = element.huyetSacTo
                    } else {
                        chisohuyetSacTo = ''
                    }
                    if (element.nhietDo != 0) {
                        chisonhietdo = element.nhietDo
                    } else {
                        chisonhietdo = ''
                    }
                    if (element.duongKinhTs != 0) {
                        chisoduongKinhTs = element.duongKinhTs
                    } else {
                        chisoduongKinhTs = ''
                    }
                    if (element.vongBung != 0) {
                        chisoduongvongBung = element.vongBung
                    } else {
                        chisoduongvongBung = ''
                    }
                    if (element.chieuCaoTc != 0) {
                        chisoduongchieuCaoTc = element.chieuCaoTc
                    } else {
                        chisoduongchieuCaoTc = ''
                    }
                    if (element.chiSoOi != 0) {
                        chisochiSoOi = element.chiSoOi
                    } else {
                        chisochiSoOi = ''
                    }
                    if (element.amDao == 2) {
                        chisoamDao = 'Không'
                    } else {
                        chisoamDao = 'Có'
                    }
                    ngaykham.push([dateformat(element.ngaykham, "dd/mm/yyyy HH:MM")])
                    cannang.push([chisocannang])
                    mach.push([chisomach])
                    nhietdo.push([chisonhietdo])
                    huyetap.push([element.huyetAp+'/'+element.huyetApThap])
                    duongKinhTs.push([chisoduongKinhTs])
                    vongBung.push([chisoduongvongBung])
                    phu.push([chisophu])
                    chieuCaoTc.push([chisoduongchieuCaoTc])
                    timthai.push([element.timThai])
                    conCoTc.push([chisoconCoTc])
                    coTuCung.push([chisocoTuCung])
                    ngoi.push([element.ngoi])
                    oi.push([element.oi])
                    amDao.push([chisoamDao])
                    ngoiThai.push([element.ngoiThai])
                    trongLuongThai.push([element.trongLuongThai])
                    chiSoOi.push([chisochiSoOi])
                    dienRauBam.push([element.dienRauBam])
                    proteinNieu.push([element.proteinNieu])
                    hongCauNieu.push([element.hongCauNieu])
                    bachCauNieu.push([element.bachCauNieu])
                    hongCau.push([chisohongCau])
                    bachCau.push([chisobachCau])
                    tieuCau.push([chisotieuCau])
                    huyetSacTo.push([chisohuyetSacTo])
                    xnKhac.push([element.xnKhac])
                    dienTim.push([element.dienTim])
                });
                this.setState({ ngaykham: ngaykham, cannang: cannang, phu: phu,mach:mach,nhietdo:nhietdo,huyetap:huyetap,duongKinhTs:duongKinhTs,vongBung:vongBung,chieuCaoTc:chieuCaoTc,timthai:timthai,conCoTc:conCoTc,coTuCung:coTuCung,ngoi:ngoi,oi:oi,amDao:amDao,ngoiThai:ngoiThai,trongLuongThai:trongLuongThai,chiSoOi:chiSoOi,dienRauBam:dienRauBam,proteinNieu:proteinNieu,hongCauNieu:hongCauNieu,bachCauNieu:bachCauNieu,hongCau:hongCau,bachCau:bachCau,tieuCau:tieuCau,huyetSacTo:huyetSacTo,xnKhac:xnKhac,dienTim:dienTim })
            })
    }
    componentDidMount() {
        AsyncStorage.getItem('DATA_LOGIN', (err, result) => {
            let JSON_DATA = JSON.parse(result)
            this.setState({
                Ma_bn: JSON_DATA.maBn
            })
            fetch('http://27.72.76.115:8181/api/benh-nhan/get-one/' + JSON_DATA.maBn)
                .then((response) => response.json())
                .then((responseData) => {

                    this.setState({
                        Ho_ten: responseData.hoTen,
                        diaChi: responseData.diaChi,
                        ngaySinh: dateformat(responseData.ngaySinh, "dd-mm-yyyy"),
                    })
                })

        })
    }

    render() {

        return (
            <View style={styles.container2}>
                <Heading />
                <ScrollView>
                    <View style={styles.container_about12}>
                        <View style={styles.column_875}>
                            <Text style={styles.text_877}>
                                Lịch sử khám thai
                            </Text>
                            <Text style={styles.text_875}>
                                <Text style={styles.text_87}>
                                    Họ và tên:
                             </Text>
                                <Text> {this.state.Ho_ten}</Text>
                            </Text>
                            <Text style={styles.text_875}>
                                <Text style={styles.text_87}>
                                    Địa chỉ:
                             </Text>
                                <Text> {this.state.diaChi}</Text>
                            </Text>
                            <Text style={styles.text_875}>
                                <Text style={styles.text_87}>
                                    Ngày Sinh:
                             </Text>
                                <Text> {this.state.ngaySinh}</Text>
                            </Text>

                            <Text style={styles.text_875}>
                                <Text style={styles.text_87}>
                                    Ngày dự kiến sinh:
                             </Text>
                                <Text> {this.state.ngaydukiensinh}</Text>
                            </Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <ScrollView horizontal={true} marginHorizontal={10} indicatorStyle={"black"} style={styles.scroll_table}>
                            <Table style={{ flexDirection: 'column' }}>
                                <TableWrapper style={{ flexDirection: 'row', height: 150 }}>
                                    <Table style={{ flexDirection: 'row', height: "100%" }} borderStyle={{ borderWidth: 1 }}>
                                        <Col data={['Ngày khám']} style={{ width: 100, backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                        <TableWrapper style={{ width: 2000, flexDirection: 'column' }}>
                                            <TableWrapper style={{ width: '20%', flexDirection: 'row', height: "30%" }}>
                                                <Row data={['Toàn thân']} style={{ width: "100%", backgroundColor: '#c8e1ff' }} flexArr={2} textStyle={styles.text} />
                                                <Row data={['Sản khoa']} style={{ width: "150%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                                <Row data={['Siêu âm']} style={{ width: "100%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                                <Row data={['Xét nghiệm']} style={{ width: "125%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                                <Row data={['Điện tim']} style={{ width: "25%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                            </TableWrapper>
                                            <TableWrapper style={{ width: '20%', flexDirection: 'row', height: "30%" }}>
                                                <Cell data='' style={{ width: "100%", backgroundColor: '#c8e1ff',borderTopWidth:0 }} textStyle={styles.text} />
                                                <Cell data='' style={{ width: "150%", backgroundColor: '#c8e1ff',borderTopWidth:0 }} textStyle={styles.text} />
                                                <Cell data='' style={{ width: "100%", backgroundColor: '#c8e1ff',borderTopWidth:0 }} textStyle={styles.text} />
                                                <Row data={['Nước tiểu']} style={{ width: "46.8%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                                <Row data={['Máu ngoại vi']} style={{ width: "78.2%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                                <Cell data='' style={{ width: "25%", backgroundColor: '#c8e1ff',borderTopWidth:0 }} textStyle={styles.text} />
                                            </TableWrapper>
                                            <TableWrapper style={{ width: "20%", flexDirection: 'row', height: "40%" }}>
                                                <Row data={['Cân nặng', 'Phù', 'Mạch (lần/phút)', 'Nhiệt độ', 'Huyết áp (mmH/g)']} style={{ width: "100%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                                <Row data={['Đường kính trước sau (cm)', 'Vùng bụng (cm)', 'Chiều cao tử cung', 'Tim thai (ck/phút)', 'Cơn co tử cung', 'Cô tử cung', 'Ngôi', 'Ối', 'Ra máu âm đạo']} style={{ width: "150%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                                <Row data={['Ngôi thai', 'Trọng lượng thai', 'Chỉ số ối', 'Diện rau bám']} style={{ width: "100%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                                <Row data={['Protenin niệu', 'Hồng cầu niệu', 'Bạch cầu niệu', 'Hồng cầu', 'Bạch cầu', 'Tiểu cầu', 'Huyết sắc tố', 'Khác']} style={{ width: "125%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                                <Row data={['Kết quả']} style={{ width: "25%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                            </TableWrapper>

                                        </TableWrapper>
                                    </Table>
                                </TableWrapper>
                                <TableWrapper style={{ flexDirection: 'row', height: 150, }}>
                                    <Table style={{ flexDirection: 'row', height: "100%" }} borderStyle={{ borderWidth: 1 }}>
                                        <Col data={this.state.ngaykham} style={{ width: 100, backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                        <TableWrapper style={{ flexDirection: 'row', width:400 }}>
                                            <Col data={this.state.cannang} style={{ width: "4%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                            <Col data={this.state.phu} style={{ width: "4%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                            <Col data={this.state.mach} style={{ width: "4%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                            <Col data={this.state.nhietdo} style={{ width: "4%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                            <Col data={this.state.huyetap} style={{ width: "4%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                        </TableWrapper>
                                        <TableWrapper style={{ flexDirection: 'row', width:600 }}>
                                            <Col data={this.state.duongKinhTs} style={{ width: "3.3%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                            <Col data={this.state.vongBung} style={{ width: "3.3%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                            <Col data={this.state.chieuCaoTc} style={{ width: "3.3%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                            <Col data={this.state.timthai} style={{ width: "3.3%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                            <Col data={this.state.conCoTc} style={{ width: "3.3%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                            <Col data={this.state.coTuCung} style={{ width: "3.3%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                            <Col data={this.state.ngoi} style={{ width: "3.3%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                            <Col data={this.state.oi} style={{ width: "3.3%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                            <Col data={this.state.amDao} style={{ width: "3.3%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                        </TableWrapper>
                                        <TableWrapper style={{ flexDirection: 'row', width:400 }}>
                                            <Col data={this.state.ngoiThai} style={{ width: "5%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                            <Col data={this.state.trongLuongThai} style={{ width: "5%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                            <Col data={this.state.chiSoOi} style={{ width: "5%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                            <Col data={this.state.dienRauBam} style={{ width: "5%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                        </TableWrapper>
                                        <TableWrapper style={{ flexDirection: 'row', width:500 }}>
                                            <Col data={this.state.proteinNieu} style={{ width: "3.125%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                            <Col data={this.state.hongCauNieu} style={{ width: "3.125%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                            <Col data={this.state.bachCauNieu} style={{ width: "3.125%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                            <Col data={this.state.hongCau} style={{ width: "3.125%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                            <Col data={this.state.bachCau} style={{ width: "3.125%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                            <Col data={this.state.tieuCau} style={{ width: "3.125%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                            <Col data={this.state.huyetSacTo} style={{ width: "3.125%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                            <Col data={this.state.xnKhac} style={{ width: "3.125%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                        </TableWrapper>
                                        <TableWrapper style={{ flexDirection: 'row', width:100 }}>
                                            <Col data={this.state.dienTim} style={{ width: "25%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                        </TableWrapper>
                                    </Table>
                                </TableWrapper>
                            </Table>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View >
        )
    }
}