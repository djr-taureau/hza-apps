module.exports = {
  name: 'ui-components-file-upload',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui-components/file-upload',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};