module.exports = {
  name: 'shared-loan-detail',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/shared/loans/loan-detail',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
