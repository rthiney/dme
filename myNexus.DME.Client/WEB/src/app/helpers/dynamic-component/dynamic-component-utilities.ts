export class DynamicControllerUtilities {
    static setupParameters(controllerName: string, inputParameters: any, outputEventEmitterName: string) {
      return {
        component: controllerName,
        inputs: inputParameters,
        output : outputEventEmitterName
      }
    }
}
