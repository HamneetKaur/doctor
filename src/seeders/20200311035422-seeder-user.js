'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [ {
            name: 'admin',
            email: 'admin@gmail.com',
            password: '$2a$07$Bq0hCq3kVrvKUHfMT0NJROmQkx09aEQkGlwBGEdw799YJvWqH1kuy', //123456
            address: 'Hà Nội',
            phone: '0368456253',
            avatar: 'admin.png',
            roleId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: 'Doctor - Phạm Văn Tuấn',
            email: 'doctor@gmail.com',
            password: '$2a$07$Bq0hCq3kVrvKUHfMT0NJROmQkx09aEQkGlwBGEdw799YJvWqH1kuy', //123456
            address: 'Hà Nội',
            phone: '0368456253',
            avatar: 'doctor.jpg',
            roleId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: 'Supporter - Phạm Văn Tuấn',
            email: 'supporter@gmail.com',
            password: '$2a$07$Bq0hCq3kVrvKUHfMT0NJROmQkx09aEQkGlwBGEdw799YJvWqH1kuy', //123456
            address: 'Hà Nội',
            phone: '0368456253',
            avatar: 'supporter.png',
            roleId: 3,
            createdAt: new Date(),
            updatedAt: new Date()
        } ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
