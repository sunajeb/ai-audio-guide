import React, { useState } from "react";
import { ChevronDown, X, Play, Pause } from "lucide-react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as SelectPrimitive from "@radix-ui/react-select";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Define cn function directly in this file
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// shadcn/ui components defined inline
const Button = React.forwardRef(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}
  />
));

const Input = React.forwardRef(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={cn(
      "flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    ref={ref}
    {...props}
  />
));

const Select = SelectPrimitive.Root;

const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-gray-200 bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-950 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));

const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white text-gray-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));

const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <ChevronDown className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));

const SelectValue = SelectPrimitive.Value;

const Switch = React.forwardRef(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gray-900 data-[state=unchecked]:bg-gray-200",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
));

const Badge = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "inline-flex items-center rounded-md border border-gray-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2",
      className
    )}
    {...props}
  />
));

const Slider = React.forwardRef(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track
      className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-gray-900/20"
    >
      <SliderPrimitive.Range className="absolute h-full bg-gray-900" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className="block h-4 w-4 rounded-full border border-gray-900/50 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
    />
  </SliderPrimitive.Root>
));

// Add Card components
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm",
      className
    )}
    {...props}
  />
));

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-6 pt-0", className)}
    {...props}
  />
));

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));

// Your main component code remains the same
const AudioGuideGenerator = () => {
    const [selectedLanguages, setSelectedLanguages] = useState(['Mandarin', 'Spanish', 'French', 'Bengali']);
    const [backgroundMusic, setBackgroundMusic] = useState(false);
    const [script, setScript] = useState('');
    const [showScript, setShowScript] = useState(false);
    const [showVoicePlayer, setShowVoicePlayer] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [sliderValue, setSliderValue] = useState(33);

    const languageOptions = [
        'English', 'Mandarin', 'Hindi', 'Spanish', 'French',
        'Arabic', 'Bengali', 'Russian', 'Portuguese', 'Indonesian'
    ];

    const handleLanguageRemove = (lang) => {
        setSelectedLanguages(selectedLanguages.filter(l => l !== lang));
    };

    const handleLanguageAdd = (newLang) => {
        if (newLang && !selectedLanguages.includes(newLang)) {
            setSelectedLanguages([...selectedLanguages, newLang]);
        }
    };

    // Function to format time from seconds to mm:ss
    const formatTime = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    // Total duration in seconds (3:45)
    const totalDuration = 3 * 60 + 45; // 225 seconds
    const currentTime = formatTime(Math.round((sliderValue / 100) * totalDuration)); // Calculate current time

    return (
        <div className="max-w-1/2 mx-auto p-6 space-y-2">
            

            <Card className="w-full">                
                <CardContent className="space-y-4 pt-6">

                    <h1 className="text-3xl font-bold mb-8">AI Audio Guide</h1>

                    <Input 
                        placeholder="Enter any location: Eiffel Tower, California, Kenya Safari" 
                        className="h-16 px-4"
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select Voice" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="male1">Male</SelectItem>
                                <SelectItem value="female1">Female</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select Duration" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="short">Synopsis (30-60 secs)</SelectItem>
                                <SelectItem value="medium">Story (1-2 mins)</SelectItem>
                                <SelectItem value="long">Detailed (3-4 mins)</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select Topic" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="habitat">Historical</SelectItem>
                                <SelectItem value="behavior">Fun facts</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select Tone" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="storytelling">Storytelling</SelectItem>
                                <SelectItem value="educational">Educational</SelectItem>
                                <SelectItem value="interactive">Funny</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex items-center justify-between bg-gray-100 p-2 rounded-lg">
                        <span className="text-gray-700">Add Background Music</span>
                        <Switch
                            checked={backgroundMusic}
                            onCheckedChange={setBackgroundMusic}
                            className="inline-flex items-center h-6 w-12 rounded-full bg-gray-200 transition-colors duration-200 ease-in-out"
                        >
                            <span className={`block w-6 h-6 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out ${backgroundMusic ? 'translate-x-6' : 'translate-x-0'}`} />
                        </Switch>
                    </div>

                    <div>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {selectedLanguages.map(lang => (
                                <Badge key={lang} variant="secondary" className="px-3 py-1 flex items-center">
                                    {lang}
                                    <X
                                        className="ml-2 w-4 h-4 cursor-pointer"
                                        onClick={() => handleLanguageRemove(lang)}
                                    />
                                </Badge>
                            ))}
                        </div>
                        <Select onValueChange={handleLanguageAdd}>
                            <SelectTrigger>
                                <SelectValue placeholder="Add more languages" />
                            </SelectTrigger>
                            <SelectContent>
                                {languageOptions.map(lang => (
                                    <SelectItem 
                                        key={lang} 
                                        value={lang}
                                        disabled={selectedLanguages.includes(lang)}
                                    >
                                        {lang}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <Button
                        className="bg-white text-black border border-black"
                        size="lg"
                        onClick={() => setShowScript(true)}
                    >
                        Generate Audio Guide
                    </Button>

                </CardContent>
            </Card>

            {showScript && (
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Generated Script</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4 text-gray-600">
                            This is a sample script for the audio guide. It would typically include information about the selected exhibit, tailored to the chosen duration, topic focus, and tone.
                        </p>
                        
                        <Button
                            className="bg-white text-black border border-black"
                            size="lg"
                            onClick={() => setShowVoicePlayer(true)}
                        >
                            Generate Voice
                        </Button>
                    </CardContent>
                </Card>
            )}

            {showVoicePlayer && (
                <Card>
                    <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2">AI Local Guide</h3>
                        <p className="text-gray-600 mb-4">Listen to the generated audio guide: This is a sample placeholder where the actual generated script would be played.</p>
                        <div className="flex items-center space-x-4">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="bg-white border border-gray-600 text-gray-600"
                            >
                                {isPlaying ? (
                                    <Pause size={20} className="text-black" />
                                ) : (
                                    <Play size={20} className="text-black" />
                                )}
                            </Button>
                            <Slider 
                                value={[sliderValue]} 
                                onValueChange={setSliderValue}
                                max={100} 
                                step={1} 
                                className="flex-grow" 
                            />
                            <span className="text-gray-600">{currentTime}</span>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

export default AudioGuideGenerator;