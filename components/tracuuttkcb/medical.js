import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from "./../css";
import Heading from './../../Header'
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
            tenLoaiKcb: '',
            ngayVao: '',
            ngayRa: '',
            soNgayDtri: '',
            tinhTrangRv: '',
            Tenkhoa:'',
            maBenh:'',
            ngayKham: dateformat(DT.ngayKham, 'dd/mm/yyyy HH:MM'),
            maLankham: DT.maLanKham,
            tenBenh:'',
            maBenhkhac:'',
            maThe:'',
            gtTheTu:'',
            gtTheDen:'',
            tenbenhvien:''
        }
        fetch('http://27.72.76.115:8181/api/danh-muc/get-all-khoa')
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({Khoa:responseData})
        })
        fetch('http://27.72.76.115:8181/api/danh-muc/get-all-benh-vien')
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({Benhvien:responseData})
        })
    }
    componentDidMount() {
        fetch('http://27.72.76.115:8181/api/lich-su-kham-benh/get-one/' + this.state.maLankham)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    tenLoaiKcb: responseData.tenLoaiKcb,
                    ngayVao: dateformat(responseData.ngayVao, 'dd/mm/yyyy HH:MM'),
                    ngayRa: dateformat(responseData.ngayRa, 'dd/mm/yyyy HH:MM'),
                    soNgayDtri: responseData.soNgayDtri,
                    ketQuaDtri: responseData.ketQuaDtri,
                    tinhTrangRv:responseData.tinhTrangRv,
                    maBenh:responseData.maBenh,
                    tenBenh:responseData.tenBenh,
                    maBenhkhac:responseData.maBenhkhac,
                    maThe:responseData.maThe,
                    gtTheTu:dateformat(responseData.gtTheTu,'dd/mm/yyyy'),
                    gtTheDen:dateformat(responseData.gtTheDen,'dd/mm/yyyy'),
                })
                this.state.Khoa.forEach(element=>{
                    if(element.ma == responseData.maKhoa){
                        this.setState({Tenkhoa:element.ten})
                    }
                })
                this.state.Benhvien.forEach(element=>{
                    if(element.ma == responseData.maDkbd){
                        this.setState({tenbenhvien:element.ten})
                    }
                })
            })
    }

    render() {

        return (
            <View style={styles.container2}>
                <Heading />
                <ScrollView>
                    <View style={styles.container_about}>
                        <View style={styles.column_875}>
                            <Text style={styles.text_877}>
                                Thông tin khám chữa bệnh
                            </Text>
                            <Text style={styles.text_877}>
                                Ngày khám chữa bệnh: {this.state.ngayKham}
                            </Text>
                            <Text style={styles.text_875}>
                                <Text style={styles.text_87}>
                                    Loại khám chữa bệnh	:
                                 </Text>
                                <Text> {this.state.tenLoaiKcb}</Text>
                            </Text>
                            <Text style={styles.text_875}>
                                <Text style={styles.text_87}>
                                    Ngày vào:
                                </Text>
                                <Text> {this.state.ngayVao}</Text>
                            </Text>
                            <Text style={styles.text_875}>
                                <Text style={styles.text_87}>
                                    Ngày ra:
                                 </Text>
                                <Text> {this.state.ngayRa}</Text>
                            </Text>
                            <Text style={styles.text_875}>
                                <Text style={styles.text_87}>
                                    Số ngày điều trị:
                                </Text>
                                <Text> {this.state.soNgayDtri}</Text>
                            </Text>
                            <Text style={styles.text_875}>
                                <Text style={styles.text_87}>
                                    Kết quả điều trị:
                                 </Text>
                                <Text> {this.state.ketQuaDtri}</Text>
                            </Text>
                            <Text style={styles.text_875}>
                                <Text style={styles.text_87}>
                                    Tình trạng ra viện:
                                 </Text>
                                <Text> {this.state.tinhTrangRv}</Text>
                            </Text>
                            <Text style={styles.text_875}>
                                <Text style={styles.text_87}>
                                     Khoa điều trị:
                                </Text>
                                <Text> {this.state.Tenkhoa}</Text>
                            </Text>
                            <Text style={styles.text_875}>
                                <Text style={styles.text_87}>
                                     Mã bệnh chính:
                                </Text>
                                <Text> {this.state.maBenh}</Text>
                            </Text>
                            <Text style={styles.text_875}>
                                <Text style={styles.text_87}>
                                    Tên bệnh chính:
                                 </Text>
                                <Text> {this.state.tenBenh}</Text>
                            </Text>
                            <Text style={styles.text_875}>
                                <Text style={styles.text_87}>
                                    Mã bệnh khác:
                                 </Text>
                                <Text> {this.state.maBenhkhac}</Text>
                            </Text>
                            <Text style={styles.text_875}>
                                <Text style={styles.text_87}>
                                    Mã thẻ BHYT:
                                 </Text>
                                <Text> {this.state.maThe}</Text>
                            </Text>
                            <Text style={styles.text_875}>
                                <Text style={styles.text_87}>
                                    Giá trị thẻ từ ngày:
                                 </Text>
                                <Text> {this.state.gtTheTu}</Text>
                            </Text>
                            <Text style={styles.text_875}>
                                <Text style={styles.text_87}>
                                    Giá trị thẻ đến ngày:
                                 </Text>
                                <Text> {this.state.gtTheDen}</Text>
                            </Text>
                            <Text style={styles.text_875}>
                                <Text style={styles.text_87}>
                                    Nơi đăng ký KCB:
                                 </Text>
                                <Text> {this.state.tenbenhvien}</Text>
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}