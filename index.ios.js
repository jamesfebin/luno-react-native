var modules={'react-native': require('react-native'), 'react': require('react')};modules['react-native-button/Button']=require('react-native-button/Button');modules['react-native-material-design']=require('react-native-material-design');modules['react-native-dialogs']=require('react-native-dialogs');modules['react-native-button']=require('react-native-button');modules['react-native-store']=require('react-native-store');modules['./images/luno_drawer.png']=require('./images/luno_drawer.png');
require('figwheel-bridge').withModules(modules).start('luno','ios','localhost');