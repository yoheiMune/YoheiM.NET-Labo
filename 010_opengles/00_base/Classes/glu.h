#ifndef GLU_H
#define GLU_H

#define GLAPIENTRY
#define GLdouble GLfloat
#define GLU_EXTENSIONS 1
#define GLU_VERSION 2

void GLAPIENTRY gluLookAt(GLdouble eyex, GLdouble eyey, GLdouble eyez,
						  GLdouble centerx, GLdouble centery, GLdouble centerz,
						  GLdouble upx, GLdouble upy, GLdouble upz);

void GLAPIENTRY gluPerspective(GLdouble fovy, GLdouble aspect,
							   GLdouble zNear, GLdouble zFar);

#endif
