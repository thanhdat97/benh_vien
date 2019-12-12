import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from "./../css";
import AsyncStorage from '@react-native-community/async-storage'
import Heading from './../../Header'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { ScrollView } from 'react-native-gesture-handler';
import { thisExpression } from '@babel/types';


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
            ngaydukiensinh: dateformat(DT.ngaySinh, "dd/mm/yyyy"),
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
                responseData.forEach(element => {
                    if (element.phu == 2) {
                        chisophu = 'Không'
                    } else {
                        chisophu = 'Có'
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
                    ngaykham.push([dateformat(element.ngaykham, "dd/mm/yyyy HH:MM")])
                    cannang.push([chisocannang])
                    mach.push([chisomach])
                    nhietdo.push([chisonhietdo])
                    huyetap.push([element.huyetAp+'/'+element.huyetApThap])
                    duongKinhTs.push([chisoduongKinhTs])
                    vongBung.push([chisoduongvongBung])
                    phu.push([chisophu])
                    chieuCaoTc.push([chisoduongchieuCaoTc])
                });
                this.setState({ ngaykham: ngaykham, cannang: cannang, phu: phu,mach:mach,nhietdo:nhietdo,huyetap:huyetap,duongKinhTs:duongKinhTs,vongBung:vongBung,chieuCaoTc:chieuCaoTc })
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
                        <ScrollView horizontal={true}>
                            <Table style={{ flexDirection: 'column' }}>
                                <TableWrapper style={{ flexDirection: 'row', height: 150 }}>
                                    <Table style={{ flexDirection: 'row', height: "100%" }} borderStyle={{ borderWidth: 1 }}>
                                        <Col data={['Ngày khám']} style={{ width: 100, backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                        <TableWrapper style={{ width: 2000, flexDirection: 'column' }}>
                                            <TableWrapper style={{ width: '20%', flexDirection: 'row', height: "30%" }}>
                                                <Row data={['Toàn thân']} style={{ width: "100%", backgroundColor: '#c8e1ff' }} flexArr={2} textStyle={styles.text} />
                                                <Row data={['Sản khoa']} style={{ width: "150%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                                <Row data={['Siêu âm']} style={{ width: "100%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                                <Row data={['Xét nghiệm']} style={{ width: "100%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                                <Row data={['Điện tim']} style={{ width: "50%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                            </TableWrapper>
                                            <TableWrapper style={{ width: '20%', flexDirection: 'row', height: "30%" }}>
                                                <Cell data='' style={{ width: "100%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                                <Cell data='' style={{ width: "150%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                                <Cell data='' style={{ width: "100%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                                <Row data={['Nước tiểu', 'Máu ngoại vi']} style={{ width: "100%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                                <Cell data='' style={{ width: "50%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />

                                            </TableWrapper>
                                            <TableWrapper style={{ width: "20%", flexDirection: 'row', height: "40%" }}>
                                                <Row data={['Cân nặng', 'Phù', 'Mạch (lần/phút)', 'Nhiệt độ', 'Huyết áp (mmH/g)']} style={{ width: "100%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                                <Row data={['Đường kính trước sau (cm)', 'Vùng bụng (cm)', 'Chiều cao tử cung', 'Tim thai (ck/phút)', 'Cơn co tử cung', 'Cô tử cung', 'Ngôi', 'Ối', 'Ra máu âm đạo']} style={{ width: "150%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                                <Row data={['Ngôi thai', 'Trọng lượng thai', 'Chỉ số ối', 'Diện rau bám']} style={{ width: "100%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                                <Row data={['Protenin niệu', 'Hồng cầu niệu', 'Bạch cầu niệu', 'Hồng cầu', 'Bạch cầu', 'Tiểu cầu', 'Huyết sắc tố', 'Khac']} style={{ width: "100%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                                <Row data={['Kết quả']} style={{ width: "50%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
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
                                            <Col data={this.state.nhietdo} style={{ width: "3.3%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                            <Col data={this.state.huyetap} style={{ width: "3.3%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                            <Col data={this.state.phu} style={{ width: "3.3%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                            <Col data={this.state.mach} style={{ width: "3.3%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                            <Col data={this.state.nhietdo} style={{ width: "3.3%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
                                            <Col data={this.state.huyetap} style={{ width: "3.3%", backgroundColor: '#c8e1ff' }} textStyle={styles.text} />
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