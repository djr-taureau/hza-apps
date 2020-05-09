module.exports = {
  name: 'ui-components-ng-grid',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui-components/ng-grid',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
