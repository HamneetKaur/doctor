'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Specializations', [ {
            name: 'TAI MŨI HỌNG',
            image: 'tai-mui-hong.jpg',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: 'THẦN KINH',
            image: 'than-kinh.jpg',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: 'TIÊU HÓA',
            image: 'tieu-hoa.jpg',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: 'TIM MẠCH',
            image: 'tim-mach.jpg',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: 'Y HỌC CỔ TRUYỀN',
            image: 'y-hoc-co-truyen.jpg',
            createdAt: new Date(),
            updatedAt: new Date()
        }, ], {});

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Specializations', null, {});
    }
};
