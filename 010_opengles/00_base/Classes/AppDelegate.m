//
//  Prog00AppDelegate.m
//  Prog00
//
//  Created by Yohei Munesada on 12/05/12.
//  Copyright __YoheiM.NET__ 2012. All rights reserved.
//

#import "AppDelegate.h"
#import "EAGLView.h"

@implementation AppDelegate

@synthesize window;
@synthesize glView;

- (void) applicationDidFinishLaunching:(UIApplication *)application {
	[glView startAnimation];
}

- (void) applicationWillResignActive:(UIApplication *)application
{
	[glView stopAnimation];
}

- (void) applicationDidBecomeActive:(UIApplication *)application
{
	[glView startAnimation];
}

- (void)applicationWillTerminate:(UIApplication *)application
{
	[glView stopAnimation];
}

- (void) dealloc
{
	[window release];
	[glView release];
	
	[super dealloc];
}

@end
