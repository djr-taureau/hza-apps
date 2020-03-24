module.exports = {
  name: 'hza-apps',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/hza-apps',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
