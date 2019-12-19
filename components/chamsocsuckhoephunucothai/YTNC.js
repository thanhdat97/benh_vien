import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from "./../css";
import AsyncStorage from '@react-native-community/async-storage'
import Heading from './../../Header'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { ScrollView } from 'react-native-gesture-handler';
import CheckBox from 'react-native-check-box'


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
            ngaydukiensinh: dateformat(DT.ngaySinh, "dd/mm/yyyy"),
            tableHead: ['Yếu tố', 'Tình trạng'],
            tableData: [],
            tuoi: DT.tuoi,
            canNang:DT.canNang,
            huyetAp:DT.huyetAp,
            than:DT.than,
            tieuDuong:DT.tieuDuong,
            tim:DT.tim,
            basedow:DT.basedow,
            sayThai:DT.sayThai,
            chetLuu:DT.chetLuu,
            deNon:DT.deNon,
            sanGiat:DT.sanGiat,
            diDang:DT.diDang,
            phauThuat:DT.phauThuat,
            deGanXa:DT.deGanXa,
            benhKhac:DT.benhKhac
        }
    }
    componentDidMount() {
        AsyncStorage.getItem('DATA_LOGIN', (err, result) => {
            let JSON_DATA = JSON.parse(result)
            let Gioitinh
            this.setState({
                Ma_bn: JSON_DATA.maBn
            })
            fetch('http://27.72.76.115:8181/api/benh-nhan/get-one/' + JSON_DATA.maBn)
                .then((response) => response.json())
                .then((responseData) => {
                    if (responseData.gioiTinh == 1) {
                        Gioitinh = 'Nam'
                    } else {
                        Gioitinh = 'Nữ'
                    }
                    this.setState({
                        Ho_ten: responseData.hoTen,
                        diaChi: responseData.diaChi,
                        ngaySinh: dateformat(responseData.ngaySinh, "dd-mm-yyyy"),
                        gioiTinh: Gioitinh
                    })
                })

        })
        let tableData = []
        if (this.state.tuoi < 16 || this.state.tuoi > 35) {
            tableData.push(['Tuổi <16 hoặc >35', <CheckBox
                style={{ flex: 1, padding: 10,alignItems: 'center' }}
                isChecked={true}
                disabled={true}
            />])
        }else{
            tableData.push(['Tuổi <16 hoặc >35', <CheckBox
            style={{ flex: 1, padding: 10,alignItems: 'center'}}
            isChecked={false}
            disabled={true}
        />])
        }
        if (this.state.canNang > 70 || this.state.canNang < 40) {
            tableData.push(['Quá béo >70kg hoặc quá gầy <40kg', <CheckBox
                style={{ flex: 1, padding: 10,alignItems: 'center' }}
                isChecked={true}
                disabled={true}
            />])
        }else{
            tableData.push(['Quá béo >70kg hoặc quá gầy <40kg', <CheckBox
            style={{ flex: 1, padding: 10,alignItems: 'center'}}
            isChecked={false}
            disabled={true}
        />])
        }
        if (this.state.huyetAp!=0) {
            tableData.push(['Bệnh tăng huyết áp', <CheckBox
                style={{ flex: 1, padding: 10,alignItems: 'center' }}
                isChecked={true}
                disabled={true}
            />])
        }else{
            tableData.push(['Bệnh tăng huyết áp', <CheckBox
            style={{ flex: 1, padding: 10,alignItems: 'center'}}
            isChecked={false}
            disabled={true}
        />])
        }
        if (this.state.than!=0) {
            tableData.push(['Bệnh thận', <CheckBox
                style={{ flex: 1, padding: 10,alignItems: 'center' }}
                isChecked={true}
                disabled={true}
            />])
        }else{
            tableData.push(['Bệnh thận', <CheckBox
            style={{ flex: 1, padding: 10,alignItems: 'center'}}
            isChecked={false}
            disabled={true}
        />])
        }
        if (this.state.tieuDuong!=0) {
            tableData.push(['Bệnh Tiền đường', <CheckBox
                style={{ flex: 1, padding: 10,alignItems: 'center' }}
                isChecked={true}
                disabled={true}
            />])
        }else{
            tableData.push(['Bệnh Tiền đường', <CheckBox
            style={{ flex: 1, padding: 10,alignItems: 'center'}}
            isChecked={false}
            disabled={true}
        />])
        }
        if (this.state.tim!=0) {
            tableData.push(['Bệnh tim', <CheckBox
                style={{ flex: 1, padding: 10,alignItems: 'center' }}
                isChecked={true}
                disabled={true}
            />])
        }else{
            tableData.push(['Bệnh tim', <CheckBox
            style={{ flex: 1, padding: 10,alignItems: 'center'}}
            isChecked={false}
            disabled={true}
        />])
        }
        if (this.state.basedow!=0) {
            tableData.push(['Bệnh Basedow', <CheckBox
                style={{ flex: 1, padding: 10,alignItems: 'center' }}
                isChecked={true}
                disabled={true}
            />])
        }else{
            tableData.push(['Bệnh Basedow', <CheckBox
            style={{ flex: 1, padding: 10,alignItems: 'center'}}
            isChecked={false}
            disabled={true}
        />])
        }
        if (this.state.sayThai!=0) {
            tableData.push(['Tiền sử sẩy thai liên tiếp', <CheckBox
                style={{ flex: 1, padding: 10,alignItems: 'center' }}
                isChecked={true}
                disabled={true}
            />])
        }else{
            tableData.push(['Tiền sử sẩy thai liên tiếp', <CheckBox
            style={{ flex: 1, padding: 10,alignItems: 'center'}}
            isChecked={false}
            disabled={true}
        />])
        }
        if (this.state.chetLuu!=0) {
            tableData.push(['Tiền sử thai chết lưu', <CheckBox
                style={{ flex: 1, padding: 10,alignItems: 'center' }}
                isChecked={true}
                disabled={true}
            />])
        }else{
            tableData.push(['Tiền sử thai chết lưu', 
            <CheckBox
            style={{ flex: 1, padding: 10,alignItems: 'center'}}
            isChecked={false}
            disabled={true}
        />])
        }
        if (this.state.deNon!=0) {
            tableData.push(['Tiền sử đẻ non, con dưới 2500g', 
            <CheckBox
                style={{ flex: 1, padding: 10,alignItems: 'center' }}
                isChecked={true}
                disabled={true}
            />])
        }else{
            tableData.push(['Tiền sử đẻ non, con dưới 2500g', <CheckBox
            style={{ flex: 1, padding: 10,alignItems: 'center'}}
            isChecked={false}
            disabled={true}
        />])
        }
        if (this.state.sanGiat!=0) {
            tableData.push(['Tiền sử sản giật', <CheckBox
                style={{ flex: 1, padding: 10,alignItems: 'center' }}
                isChecked={true}
                disabled={true}
            />])
        }else{
            tableData.push(['Tiền sử sản giật', <CheckBox
            style={{ flex: 1, padding: 10,alignItems: 'center'}}
            isChecked={false}
            disabled={true}
        />])
        }
        if (this.state.diDang!=0) {
            tableData.push(['Tiền sử sinh con dị dạng bẩm sinh', <CheckBox
                style={{ flex: 1, padding: 10,alignItems: 'center' }}
                isChecked={true}
                disabled={true}
            />])
        }else{
            tableData.push(['Tiền sử sinh con dị dạng bẩm sinh', <CheckBox
            style={{ flex: 1, padding: 10,alignItems: 'center'}}
            isChecked={false}
            disabled={true}
        />])
        }
        if (this.state.phauThuat!=0) {
            tableData.push(['Tiền sử phẩu thuật lấy thai', <CheckBox
                style={{ flex: 1, padding: 10,alignItems: 'center' }}
                isChecked={true}
                disabled={true}
            />])
        }else{
            tableData.push(['Tiền sử phẩu thuật lấy thai', <CheckBox
            style={{ flex: 1, padding: 10,alignItems: 'center'}}
            isChecked={false}
            disabled={true}
        />])
        }
        if (this.state.deGanXa!=0) {
            tableData.push(['Các lần đẻ quá gần hoặc quá xa nhau', <CheckBox
                style={{ flex: 1, padding: 10,alignItems: 'center' }}
                isChecked={true}
                disabled={true}
            />])
        }else{
            tableData.push(['Các lần đẻ quá gần hoặc quá xa nhau', <CheckBox
            style={{ flex: 1, padding: 10,alignItems: 'center'}}
            isChecked={false}
            disabled={true}
        />])
        }
        tableData.push(['Bệnh khác',this.state.benhKhac])
        this.setState({tableData:tableData})
    }

    render() {

        return (
            <View style={styles.container2}>
                <Heading />
                <ScrollView>
                    <View style={styles.container_about12}>
                        <View style={styles.column_875}>
                            <Text style={styles.text_877}>
                                Yếu tố nguy cơ
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
                                    Ngày sinh:
                             </Text>
                                <Text> {this.state.ngaySinh}</Text>
                            </Text>
                            <Text style={styles.text_875}>
                                <Text style={styles.text_87}>
                                    Lần sinh:
                             </Text>
                                <Text> Lần sinh thứ {this.state.lansinh}</Text>
                            </Text>
                            <Text style={styles.text_875}>
                                <Text style={styles.text_87}>
                                    Para:
                             </Text>
                                <Text> {this.state.para}</Text>
                            </Text>
                            <Text style={styles.text_875}>
                                <Text style={styles.text_87}>
                                    Ngày kinh:
                             </Text>
                                <Text> {this.state.ngaykinh}</Text>
                            </Text>
                            <Text style={styles.text_875}>
                                <Text style={styles.text_87}>
                                    Ngày dự kiến sinh:
                             </Text>
                                <Text> {this.state.ngaydukiensinh}</Text>
                            </Text>
                        </View>
                    </View>
                    <View style={styles.container_table}>
                        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                            <Row data={this.state.tableHead} style={styles.headact} textStyle={styles.text} />
                            <Rows data={this.state.tableData} style={styles.dataact1} textStyle={styles.text} />
                        </Table>
                    </View>
                </ScrollView>
            </View>
        )
    }
}