'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Specializations', [
            {
                name: 'Otolaryngology (Ear, Nose, Throat)',
                image: 'tai-mui-hong.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Neurosurgery',
                image: 'than-kinh.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Surgery',
                image: 'tieu-hoa.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Cardiology (Heart)',
                image: 'tim-mach.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Medicine',
                image: 'y-hoc-co-truyen.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Transplant Hepatology',
                image: 'y-hoc-co-truyen.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Plastic Surgery',
                image: 'y-hoc-co-truyen.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },

        ], {});

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Specializations', null, {});
    }
};
