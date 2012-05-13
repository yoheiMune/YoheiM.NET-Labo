//
//  Prog00AppDelegate.m
//  Prog00
//
//  Created by SAKAI Yuji on 09/09/16.
//  Copyright __MyCompanyName__ 2009. All rights reserved.
//

#import "Prog00AppDelegate.h"
#import "EAGLView.h"

@implementation Prog00AppDelegate

@synthesize window;
@synthesize glView;

- (void) applicationDidFinishLaunching:(UIApplication *)application
{
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
