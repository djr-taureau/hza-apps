module.exports = {
  name: 'tasks-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/tasks-app',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
