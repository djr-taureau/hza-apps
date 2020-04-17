module.exports = {
  name: 'shared-loans-shell',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/shared/loans/shell',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
