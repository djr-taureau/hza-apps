module.exports = {
  name: 'ui-components-tabs',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui-components/tabs',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
