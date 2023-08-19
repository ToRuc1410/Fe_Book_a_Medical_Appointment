import React, { Component } from 'react';
import { connect } from 'react-redux';
import logotruyenThong from '../../../assets/images/logo_thongtin.png'



const containerStyle = {
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
 
 };

 const imageStyle = {
    objectFit: 'contain',
   minWidth: 'auto', // Để đảm bảo hình ảnh không vượt quá chiều rộng của container
   minHeight: '100%',
 };

class About extends Component {
   render() {
      return (
         <div className="section-share section-about">
            <div className="section-about-header">
               Truyền thông nói gì về Bạn
            </div>
            <div className="section-about-content">
               <div className="content-left" style={containerStyle}>
                 <img src={logotruyenThong} alt='img truyen thông nói gi về bạn' style={imageStyle}/>
               </div>
               <div className="content-right">

                  <p>
                     Booking Your Health là Nền tảng Y tế chăm sóc sức khỏe toàn diện
                     hàng đầu Việt Nam kết nối người dùng với trên 150 bệnh viện
                     - phòng khám uy tín, hơn 1,000 bác sĩ chuyên khoa giỏi và
                     hàng nghìn dịch vụ, sản phẩm y tế chất lượng cao.
                  </p>
               </div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      isLoggedIn: state.user.isLoggedIn,
      language: state.app.language,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
