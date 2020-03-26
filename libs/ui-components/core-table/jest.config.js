module.exports = {
  name: 'ui-components-core-table',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui-components/core-table',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
