//
//  ESRenderer.h
//  Prog00
//
//  Created by Yohei Munesada on 12/05/12.
//  Copyright __YoheiM.NET__ 2012. All rights reserved.
//

#import <QuartzCore/QuartzCore.h>

#import <OpenGLES/EAGL.h>
#import <OpenGLES/EAGLDrawable.h>

@protocol ESRenderer <NSObject>

- (void) render;
- (BOOL) resizeFromLayer:(CAEAGLLayer *)layer;

@end
