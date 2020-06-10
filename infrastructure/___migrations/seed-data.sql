INSERT [dbo].[system-users]
    ([guid], [createdOn], [modifiedOn], [displayName], [providerId], [profileGuid])
VALUES
    (N'1493433e-f36b-1410-8d31-00da3ea4d54f', CAST(N'2018-11-20T18:52:22.5900000' AS DateTime2), CAST(N'2018-11-20T18:52:22.5900000' AS DateTime2), N'Ron Bullis', N'8183a9b5-505a-4017-a2c3-5d5beb74e2c7', N'0e93433e-f36b-1410-8d31-00da3ea4d54f')
INSERT [dbo].[system-users]
    ([guid], [createdOn], [modifiedOn], [displayName], [providerId], [profileGuid])
VALUES
    (N'9d4d433e-f36b-1410-8d32-00da3ea4d54f', CAST(N'2018-12-07T18:53:49.5900000' AS DateTime2), CAST(N'2018-12-07T18:53:49.5900000' AS DateTime2), N'Jordan Smith', N'22c9c51b-85ce-40b9-ad96-3ed17b2f6426', N'914d433e-f36b-1410-8d32-00da3ea4d54f')
INSERT [dbo].[system-roles]
    ([guid], [createdOn], [modifiedOn], [displayName], [name], [description], [scope])
VALUES
    (N'4b93433e-f36b-1410-8d31-00da3ea4d54f', CAST(N'2018-11-21T01:58:00.4566667' AS DateTime2), CAST(N'2018-11-21T01:58:00.4566667' AS DateTime2), N'Owner', N'Owner', N'A User who is the owne of the specified Account', 1)
INSERT [dbo].[system-roles]
    ([guid], [createdOn], [modifiedOn], [displayName], [name], [description], [scope])
VALUES
    (N'5193433e-f36b-1410-8d31-00da3ea4d54f', CAST(N'2018-11-21T01:58:14.7433333' AS DateTime2), CAST(N'2018-11-21T01:58:14.7433333' AS DateTime2), N'Lead Advisor', N'Lead Advisor', N'A User who is considered a Lead Advisor by their firm', 2)
INSERT [dbo].[system-roles]
    ([guid], [createdOn], [modifiedOn], [displayName], [name], [description], [scope])
VALUES
    (N'5293433e-f36b-1410-8d31-00da3ea4d54f', CAST(N'2018-11-21T01:58:24.2800000' AS DateTime2), CAST(N'2018-11-21T01:58:24.2800000' AS DateTime2), N'Primary Advisor', N'Primary Advisor', N'Primary Advisor', 3)
INSERT [dbo].[system-permissions]
    ([guid], [createdOn], [modifiedOn], [name], [description], [scope])
VALUES
    (N'3493433e-f36b-1410-8d31-00da3ea4d54f', CAST(N'2018-11-21T01:23:59.9566667' AS DateTime2), CAST(N'2018-11-21T01:23:59.9566667' AS DateTime2), N'accounts/canDeacticate', N'Enables ability to deactivate a Account', 1)
INSERT [dbo].[system-permissions]
    ([guid], [createdOn], [modifiedOn], [name], [description], [scope])
VALUES
    (N'3993433e-f36b-1410-8d31-00da3ea4d54f', CAST(N'2018-11-21T01:44:36.7466667' AS DateTime2), CAST(N'2018-11-21T01:44:36.7466667' AS DateTime2), N'accounts/firms/add', N'Enables ability to add a Firm', 1)
INSERT [dbo].[system-permissions]
    ([guid], [createdOn], [modifiedOn], [name], [description], [scope])
VALUES
    (N'3f93433e-f36b-1410-8d31-00da3ea4d54f', CAST(N'2018-11-21T01:44:56.1900000' AS DateTime2), CAST(N'2018-11-21T01:44:56.1900000' AS DateTime2), N'accounts/firms/clients/add', N'Enables ability to add Client', 2)
INSERT [dbo].[system-permissions]
    ([guid], [createdOn], [modifiedOn], [name], [description], [scope])
VALUES
    (N'4393433e-f36b-1410-8d31-00da3ea4d54f', CAST(N'2018-11-21T01:45:17.0833333' AS DateTime2), CAST(N'2018-11-21T01:45:17.0833333' AS DateTime2), N'accounts/firms/clients/teams/members/add', N'Can add a client to the team', 3)
INSERT [dbo].[role-permissions]
    ([systemRolesGuid], [systemPermissionsGuid])
VALUES
    (N'4b93433e-f36b-1410-8d31-00da3ea4d54f', N'3493433e-f36b-1410-8d31-00da3ea4d54f')
INSERT [dbo].[role-permissions]
    ([systemRolesGuid], [systemPermissionsGuid])
VALUES
    (N'4b93433e-f36b-1410-8d31-00da3ea4d54f', N'3993433e-f36b-1410-8d31-00da3ea4d54f')
INSERT [dbo].[role-permissions]
    ([systemRolesGuid], [systemPermissionsGuid])
VALUES
    (N'5193433e-f36b-1410-8d31-00da3ea4d54f', N'3f93433e-f36b-1410-8d31-00da3ea4d54f')
INSERT [dbo].[role-permissions]
    ([systemRolesGuid], [systemPermissionsGuid])
VALUES
    (N'5293433e-f36b-1410-8d31-00da3ea4d54f', N'4393433e-f36b-1410-8d31-00da3ea4d54f')
INSERT [dbo].[roles]
    ([guid], [createdOn], [modifiedOn], [displayName], [name], [description], [scope])
VALUES
    (N'4693433e-f36b-1410-8d31-00da3ea4d54f', CAST(N'2018-11-21T01:47:35.7366667' AS DateTime2), CAST(N'2018-11-21T01:47:35.7366667' AS DateTime2), N'Owner', N'Owner', N'A User who is the owne of the specified Account', 1)
INSERT [dbo].[roles]
    ([guid], [createdOn], [modifiedOn], [displayName], [name], [description], [scope])
VALUES
    (N'4893433e-f36b-1410-8d31-00da3ea4d54f', CAST(N'2018-11-21T01:49:51.9233333' AS DateTime2), CAST(N'2018-11-21T01:49:51.9233333' AS DateTime2), N'Lead Advisor', N'Lead Advisor', N'A User who is considered a Lead Advisor by their firm', 2)
INSERT [dbo].[roles]
    ([guid], [createdOn], [modifiedOn], [displayName], [name], [description], [scope])
VALUES
    (N'4993433e-f36b-1410-8d31-00da3ea4d54f', CAST(N'2018-11-21T01:50:23.1500000' AS DateTime2), CAST(N'2018-11-21T01:50:23.1500000' AS DateTime2), N'Primary Advisor', N'Primary Advisor', N'A User who is considered the Primary Advisor to a client', 3)
INSERT [dbo].[settings]
    ([guid], [createdOn], [modifiedOn], [entityGuid], [name], [value], [valueType], [statusFlag])
VALUES
    (N'8ca1433e-f36b-1410-8d34-00da3ea4d54f', CAST(N'2018-12-13T21:34:26.0100000' AS DateTime2), CAST(N'2018-12-13T21:34:26.0100000' AS DateTime2), N'1b93433e-f36b-1410-8d31-00da3ea4d54f', N'isWhiteLabeled', N'true', 1, 1)