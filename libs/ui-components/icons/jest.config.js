module.exports = {
  name: 'ui-components-icons',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui-components/icons',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
