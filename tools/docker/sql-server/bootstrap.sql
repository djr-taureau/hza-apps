IF EXISTS 
   (
     SELECT name FROM master.dbo.sysdatabases 
    WHERE name = N'hza'
    )
BEGIN
    SELECT 'Database [hza] already exists' AS Message
END
ELSE
BEGIN
    CREATE DATABASE [hza]
    SELECT '[hza] database was created'
END
GO
USE hza
GO