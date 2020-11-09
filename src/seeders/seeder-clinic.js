'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Clinics', [ {
            name: 'Phòng khám đa khoa Thu Cúc',
            address: 'Hà Nội',
            image: 'phong-kham-thu-cuc.jpg',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: 'Phòng khám Meditec',
            address: 'Hà Nội',
            image: 'phong-kham-meditec.jpg',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: 'Phòng khám quốc tế Bảo Sơn',
            address: 'Hà Nội',
            image: 'phong-kham-bao-son.jpg',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: 'Phòng khám Bác sĩ Đào Đình Thi',
            address: '224 Láng Hạ, Hà Nội',
            image: 'phong-kham-bac-si-dao-dinh-thi.jpg',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: 'Phòng khám 255 Trường Chinh',
            address: '255 Trường Chinh, Hà Nội',
            image: 'phong-kham-255-truong-chinh.jpg',
            createdAt: new Date(),
            updatedAt: new Date()
        } ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Clinics', null, {});
    }
};
