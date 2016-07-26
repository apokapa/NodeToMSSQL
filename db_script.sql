--Db Script for Node to MSSQL sample

--Create table contacts...
IF EXISTS (SELECT name FROM sysobjects WHERE name = 'contacts' AND type = 'U') DROP TABLE dbo.contacts
GO
CREATE TABLE dbo.contacts(
	id							int IDENTITY(1,1) NOT NULL PRIMARY KEY,		--ID auto increment
	LastName					nvarchar(100) NOT NULL,						--Last Name of contact		
	FirstName					nvarchar(50)  NULL,							--First Name of contact
	Comments					ntext		  NULL,							--Comments for contact
    );


--Insert some contacts...
DECLARE @i int
SET @i = 1
WHILE @i <= 50
BEGIN

INSERT contacts(LastName,FirstName,Comments) 
SELECT 'LastName'+CONVERT(NVARCHAR(100),@i),'FirstName'+CONVERT(NVARCHAR(100),@i),'comment no'+CONVERT(NVARCHAR(100),@i) 
	SET @i = @i + 1
END




