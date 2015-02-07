angular.module('gridSizes', [])
    .value('gridSizes', {
        types: ['s', 'm', 'x', 'o', 'p', 'q', 'r', 'y', 'z', 'w'],
        names: {
            's': 'S',
            'o': 'M',
            'p': 'L',
            'q': 'XL'
        }
    });