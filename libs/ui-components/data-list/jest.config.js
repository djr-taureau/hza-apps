module.exports = {
  name: 'ui-components-data-list',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui-components/data-list',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
