module.exports = {
  name: 'hza',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/hza',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
