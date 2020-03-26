module.exports = {
  name: 'ui-components-data-table',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui-components/data-table',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
