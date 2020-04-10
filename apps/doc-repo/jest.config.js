module.exports = {
  name: 'doc-repo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/doc-repo',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
