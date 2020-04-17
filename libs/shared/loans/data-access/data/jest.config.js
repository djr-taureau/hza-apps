module.exports = {
  name: 'shared-loans-data-access-data',
  preset: '../../../../../jest.config.js',
  coverageDirectory:
    '../../../../../coverage/libs/shared/loans/data-access/data',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
