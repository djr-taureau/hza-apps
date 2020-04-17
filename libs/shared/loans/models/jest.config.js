module.exports = {
  name: 'shared-loans-models',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/shared/loans/models',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
