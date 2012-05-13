//
//  Prog00AppDelegate.h
//  Prog00
//
//  Created by Yohei Munesada on 12/05/12.
//  Copyright __YoheiM.NET__ 2012. All rights reserved.
//

#import <UIKit/UIKit.h>

@class EAGLView;

@interface AppDelegate : NSObject <UIApplicationDelegate> {
    UIWindow *window;
    EAGLView *glView;
}

@property (nonatomic, retain) IBOutlet UIWindow *window;
@property (nonatomic, retain) IBOutlet EAGLView *glView;

@end

