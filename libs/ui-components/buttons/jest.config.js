module.exports = {
  name: 'ui-components-buttons',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui-components/buttons',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
