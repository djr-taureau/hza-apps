module.exports = {
  name: 'ui-components-overlay',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui-components/overlay',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
