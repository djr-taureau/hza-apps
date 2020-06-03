module.exports = {
  name: 'tasks-admin-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/tasks-admin-app',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
