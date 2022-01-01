def get_state_abbr(string, state=False):
    '''Returns two-letter state abbreviation'''

    if not state: # no change
        return string
    d = {'alabama': 'AL', 'alaska': 'AK', 'arizona': 'AZ', 'arkansas': 'AR', 'california': 'CA', 'colorado': 'CO', 'connecticut': 'CT', 'districtofcolumbia': 'DC', 'delaware': 'DE', 'florida': 'FL', 'georgia': 'GA', 'hawaii': 'HI', 'idaho': 'ID', 'illinois': 'IL', 'indiana': 'IN', 'iowa': 'IA', 'kansas': 'KS', 'kentucky': 'KY', 'louisiana': 'LA', 'maine': 'ME', 'maryland': 'MD', 'massachusetts': 'MA', 'michigan': 'MI', 'minnesota': 'MN', 'mississippi': 'MS', 'missouri': 'MO', 'montana': 'MT', 'nebraska': 'NE', 'nevada': 'NV', 'newhampshire': 'NH', 'newjersey': 'NJ', 'newmexico': 'NM', 'newyork': 'NY', 'northcarolina': 'NC', 'northdakota': 'ND', 'ohio': 'OH', 'oklahoma': 'OK', 'oregon': 'OR', 'pennsylvania': 'PA', 'rhodeisland': 'RI', 'southcarolina': 'SC', 'southdakota': 'SD', 'tennessee': 'TN', 'texas': 'TX', 'utah': 'UT', 'vermont': 'VT', 'virginia': 'VA', 'washington': 'WA', 'westvirginia': 'WV', 'wisconsin': 'WI', 'wyoming': 'WY'}
    out = d.get(''.join(string.split()).lower())
    if out == None:
        return string
    return out

def get_county_name(county, state):
    '''Returns county name used in Mapchart labels'''

    state_abbr = get_state_abbr(state)
    if county == "Bedford" and state_abbr == "VA":
        return "Bedford_Co___VA"
    elif county == "Charles City" and state_abbr == "VA":
        return "Charles_City__VA"
    elif county == "James City" and state_abbr == "VA":
        return "James_City__VA"
    elif county == "St. Louis" and state_abbr == "MO":
        return "St__Louis_Co___MO"
    elif county == "Ste. Genevieve" and state_abbr == "MO":
        return "Sainte_Genevieve__MO"
    elif county == "De Kalb" and state_abbr == "MO":
        return "DeKalb__MO"
    elif county == "LaSalle" and state_abbr == "IL":
        return "La_Salle__IL"
    elif county == "DeWitt" and state_abbr == "IL":
        return "De_Witt__IL"
    elif county == "St. Mary's" and state_abbr == "MD":
        return "St_Mary_s__MD"
    elif county == "Baltimore City" and state_abbr == "MD":
        return "Baltimore_City__MD"
    elif county == "Baltimore County" and state_abbr == "MD":
        return "Baltimore_County__MD"
    elif county == "Dekalb" and state_abbr == "IN":
        return "DeKalb__IN"
    elif county == "Lagrange" and state_abbr == "IN":
        return "LaGrange__IN"
    else:
        if county[-5:] == " City":
            county = county[:-5] # remove final "city"
        county = county.replace("County","Co.") # Mapchart uses Co
        county = county.replace('ñ', 'n')
        county = county.replace('ö', 'o')
        county = county.replace('.', '_')
        county = county.replace('\'', '_')
        county = county.replace('-', '_')
        county = county.replace(' ', '_')
        return county + '__' + state_abbr

def replace_county(file, state):
    out = ""
    for line in open(file+".txt",'r',encoding='utf8'):
        lst = line.split('\t')
        lst[0] = get_county_name(lst[0],state)
        out += '\t'.join(lst)
    open(file+'.txt','w').write(out)

replace_county("junk/US_president_county_AL","WY")

def get_party_lst(lst):
    out = []
    for i in lst:
        out.append(get_party_abbr(i))
    return out

def get_party_abbr(string):
    '''Returns proper name of party given abbreviation/variation'''

    abbrs = {
        "Democratic":{"dem","democrat","democratic","democraticparty"}
    }

    for abbr in abbrs:
        if ''.join(string.split()).lower() in abbrs[abbr]:
            return abbr
    return string # if not found

def recolor_svg_hex(file_name, color, recolor):
    '''Scales coordinates in SVG path object'''
    outfile = open(file_name+'_recolor.txt','w')
    for line in open(file_name+'.txt','r'):
        if "<path " not in line or " fill=\"#"+color+"\"" not in line:
            outfile.write(line)
            continue
        prefix = line[:line.find(" fill=\"#")+8]
        coord = line[line.find(" fill=\"#")+8:]
        suffix = coord[coord.find('"'):]
        coord = coord[:coord.find('"')]
        outfile.write(prefix+recolor+suffix)
    outfile.close()

def add_class(file, class_name):

    out = ""
    for line in open(file+'.txt','r'):
        lst = line.strip().split(' ')
        for i in range(len(lst)-1,-1,-1):
            if "class=\"" in lst[i]:
                lst.pop(i)
        lst.insert(1,"class=\""+class_name+"\"")
        out += ' '.join(lst) + '\n'
    open(file+'.txt','w').write(out)

def replace_map(html, map, n = 4):
    '''replace map in html with contents in map (svg)'''
    out = ""
    flag = False
    flag2 = False
    done = False
    for line in open(html+'.html','r'):
        if flag2:
            if "<path " not in line:
                flag2 = False
                flag = False
                out += line
            elif not done:
                for part in open(map + ".txt", 'r'):
                    out += ' ' * n + part.strip() + '\n'
                done = True
        elif flag:
            if "<path " in line:
                flag2 = True
            else:
                out += line
        else:
            out += line
            if "<svg " in line:
                flag = True

    open(html+".html",'w').write(out)

