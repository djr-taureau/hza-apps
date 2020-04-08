module.exports = {
  name: 'loans',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/loans',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
