import os

def compile_all(path="elections"):
    '''Compiles a folder of folders
    folder elections should be a folder of folders (US_president, etc.)'''

    out = {}
    for folder in os.listdir(path):
        out[folder] = compile_folder(path + '/' + folder)
    return out

def compile_folder(path):
    '''Compiles all files in folder path'''

    out = {}
    for filename in os.listdir(path):
        if filename.endswith(".txt"): # only consider .txt files (for safety)
            out[filename.split('.')[0]] = parse(path+'/'+filename)
    return out

def parse(filename):
    '''Given a file, parses to return dictionary that can be used by JS to describe a map'''

    results = {} # dictionary mapping subdivision to results (by party)
    parties = [] # ordered list of parties (incl. total)
    colors = [] # ordered list of colors (corresponding to parties, total should be last and not colored)
    for line in open(filename,'r'):
        lst = line.strip().split('\t')
        if lst[0] == "_PARTIES":
            parties = lst[1:]
        elif lst[0] == "_COLORS":
            colors = lst[1:]
        else:
            results[lst[0]] = lst[1:]
    out = {}
    color_dict = {}
    for i in range(len(colors)):
        color_dict[parties[i]] = colors[i]
    for div in results:
        temp = {}
        for i in range(len(results[div])):
            temp[parties[i]] = int(results[div][i])
        out[div] = temp
    out["_COLORS"] = color_dict
    return out

print(compile_all())