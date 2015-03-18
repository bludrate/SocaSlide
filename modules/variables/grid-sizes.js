angular.module('ss.gridSizes', [])
    .value('gridSizes', {
        types: ['s', 'm', 'o', 'p', 'q', 'x', 'r', 'y', 'z', 'w'],
        names: {
            's': 'S',
            'o': 'M',
            'p': 'L',
            'q': 'XL'
        }
    });