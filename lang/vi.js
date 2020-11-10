export const transValidation = {
    email_incorrect: "Address email không hợp lệ",
    gender_incorrect: "Invalid gender",
    password_incorrect: "Mật khẩu có ít nhất 6 kí tự",
    password_confirmation_incorrect: "Mật khẩu nhập lại không chính xác",
};

export const transMailBookingNew = {
    subject: "Email thông báo đặt quá trình đặt lịch tại DoctorCare",
    template: (data) => {
        return `<h3>Cảm ơn bạn đã đặt lịch khám bệnh tại hệ thống DoctorCare </h3>
        <h4>Thông tin lịch hẹn đã đặt:</h4>
        <div>Bác sĩ: ${data.doctor} </div>
        <div>Thời gian: ${data.time}</div>
        <div>Ngày: ${data.date}</div>
        <div>Trạng thái lịch hẹn: <b>Lịch hẹn mới đang chờ xác nhận</b></div>
        <h4>Hệ thống DoctorCare sẽ tự động gửi email thông báo khi lịch hẹn được xác nhận hoàn tất. Trân trọng cảm ơn !</h4>`;
    },
};

export const transMailBookingFailed = {
    subject: "Email thông báo đặt quá trình đặt lịch tại DoctorCare",
    template: (data) => {
        return `<h3>Cảm ơn bạn đã đặt lịch khám bệnh tại hệ thống DoctorCare </h3>
        <h4>Thông tin lịch hẹn đã đặt:</h4>
        <div>Bác sĩ: ${data.doctor} </div>
        <div>Thời gian: ${data.time}</div>
        <div>Ngày: ${data.date}</div>
        <div>Trạng thái lịch hẹn: <b>Lịch hẹn được hủy: ${data.reason}</b></div>
        <h4>Nếu nhận thấy sai sót từ email này, vui lòng liên hệ tổng đài hỗ trợ: <b> 1900 00 11 22</b>. Trân trọng cảm ơn !</h4>`;
    },
};

export const transMailBookingSuccess = {
    subject: "Email thông báo đặt quá trình đặt lịch tại DoctorCare",
    template: (data) => {
        return `<h3>Cảm ơn bạn đã đặt lịch khám bệnh tại hệ thống DoctorCare </h3>
        <h4>Thông tin lịch hẹn đã đặt:</h4>
        <div>Bác sĩ: ${data.doctor} </div>
        <div>Thời gian: ${data.time}</div>
        <div>Ngày: ${data.date}</div>
        <div>Trạng thái lịch hẹn: <b>Lịch hẹn đăng ký thành công</b></div>
        <h4>Trân trọng cảm ơn !</h4>`;
    },
};

export const transMailRemedy= {
    subject: "Email gửi hóa đơn khám bệnh từ bác sĩ",
    template: (data) => {
        return `<h3>Cảm ơn bạn đã tin tưởng đặt lịch khám bệnh tại hệ thống DoctorCare.</h3>
        <h4>Sau khi bạn đã khám tại phòng khám bác sĩ <b>${data.doctor}</b>, bạn có thể xem lại chi tiết hóa đơn từ tệp đính kèm email này.</h4>
        <div>Mật khẩu để giải nén tệp đính kèm có dạng sau: <i>họvàtênviếtliềnkhôngdấu-3chữsốđầusốđiệnthoại-2chữsốcuốinămsinh</i>  của bạn</div>
        <br>
        <div>VD: Họ và tên đầy đủ : Lê Văn Xyz, có số điện thoại đăng kí khám bệnh: 0123456789 và sinh năm: 1910,  thì mật khẩu giải nén là: <b>levanxyz-012-10</b></div>
        <br>
        <div>Trong trường hợp không nhận được tệp đính kèm cũng như không giải nén được, vui lòng liên hệ tổng đài hỗ trợ <b>1900 00 11 22</b></div>
        <h4>Trân trọng cảm ơn !</h4>`;
    },
};


export const transErrors = {
    login_failed: "Email or password is incorrect",
    account_notActive: "Account haven't been actived, please contact admin for more info",
    server_error: "Something wrong, plz contact admin bla bla",
    avatar_type: "avatar type not support",
    avatar_size: "avatar limit 1MB only",
    image_chat_size: "image limit 2MB only",
    attach_files_size: "Attach files limit 5MB only",
    conversation_not_found: "Nhóm trò chuyện không tồn tại",
    chat_user_not_found: "Người dùng không tồn tại"
};

export const transSuccess = {
    login_success: (username) => {
        return `Welcome ${username}`;
    },
    logout_success: "Log out done!",
    user_info_updated: "Cập nhật thông tin user thành công"
};
